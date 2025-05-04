/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PrismaClient, SyncStatus } from '@prisma/client';

export async function seedEhrSyncLogs(
  prisma: PrismaClient,
  patientIds: string[],
) {
  console.log('Seeding EHR sync logs...');

  const ehrProviders = await prisma.ehrProvider.findMany();

  if (ehrProviders.length === 0 || patientIds.length === 0) {
    console.log('No EHR providers or patients found. Skipping EHR sync logs.');
    return;
  }

  const syncLogs: any[] = [];

  for (const patientId of patientIds.slice(
    0,
    Math.min(10, patientIds.length),
  )) {
    const patient = await prisma.patient.findUnique({
      where: { id: patientId },
      select: { clientId: true },
    });

    if (!patient) continue;

    const ehrProvider =
      ehrProviders[Math.floor(Math.random() * ehrProviders.length)];

    const statuses: SyncStatus[] = ['COMPLETED', 'FAILED', 'PENDING'];
    const status = statuses[Math.floor(Math.random() * statuses.length)];

    const syncLog = await prisma.ehrSyncLog.create({
      data: {
        patientId,
        clientId: patient.clientId,
        ehrProviderCode: ehrProvider.code,
        syncStatus: status,
        requestPayload: generateRequestPayload(ehrProvider.code),
        responsePayload:
          status === 'COMPLETED' ? generateResponsePayload() : null,
        errorDetails:
          status === 'FAILED'
            ? { error: 'Connection error with EHR server' }
            : {},
        retryCount: status === 'FAILED' ? Math.floor(Math.random() * 3) : 0,
        nextRetryAt:
          status === 'FAILED' ? new Date(Date.now() + 3600000) : null,
      },
    });

    syncLogs.push(syncLog);
  }

  console.log(`Created ${syncLogs.length} EHR sync logs`);
}

function generateRequestPayload(providerCode: string): any {
  if (providerCode === 'ATHENA') {
    return {
      patient: {
        name: 'PATIENT_IDENT_NAME',
        gender: 'GENDER_OF_PATIENT',
        dob: 'DATE_OF_BIRTH_PATIENT',
        address: 'PATIENT_LOCATION_ADDRESS',
        phone: 'TELEPHONE_NUMBER_PATIENT',
        email: 'PATIENT_EMAIL_ID',
        emergencyContact: 'EMERGENCY_CONTACT_PATIENT',
        insuranceProvider: 'INSURANCE_PROVIDER_PATIENT',
        insurancePolicyNumber: 'POLICY_NUMBER_INSURANCE_PATIENT',
        primaryCarePhysician: 'PRIMARY_CARE_DOCTOR_PATIENT',
        allergies: 'ALLERGIES_PATIENT',
        currentMedications: 'PATIENT_MEDICATIONS_CURRENT',
        medicalHistory: 'HISTORY_MEDICAL_PATIENT',
        socialHistory: 'HISTORY_SOCIAL_PATIENT',
        familyHistory: 'HISTORY_FAMILY_PATIENT',
      },
    };
  } else if (providerCode === 'ALLSCRIPTS') {
    return {
      patient: {
        p_name: 'NAME_OF_PAT',
        p_gender: 'GENDER_PAT',
        p_dob: 'BIRTHDATE_OF_PAT',
        p_address: 'ADDRESS_PAT',
        p_phone: 'PHONE_NUMBER_PAT',
        p_email: 'EMAIL_ID_PAT',
        p_emergencyContact: 'EMERGENCY_CONTACT_PAT',
        p_insuranceProvider: 'PROVIDER_INSURANCE_PAT',
        p_insurancePolicyNumber: 'POLICY_NUM_INSURANCE_PAT',
        p_primaryCarePhysician: 'PRIMARY_CARE_DOC_PAT',
        p_medicalHistory: 'HISTORY_MEDICAL_PAT',
        p_allergies: 'ALLERGIES_PAT',
        p_currentMedications: 'CURRENT_MEDS_PAT',
        p_socialHistory: 'SOCIAL_HISTORY_PAT',
        p_familyHistory: 'FAMILY_HISTORY_PAT',
      },
    };
  } else {
    return {
      patient: {
        id: 'PATIENT_ID',
        data: 'PATIENT_DATA',
      },
    };
  }
}

function generateResponsePayload(): any {
  return {
    status: 'success',
    timestamp: new Date().toISOString(),
    message: 'Data synchronized successfully',
    recordId: `REC-${Math.floor(Math.random() * 1000000)}`,
  };
}
