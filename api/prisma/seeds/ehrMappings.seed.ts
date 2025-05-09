import { PrismaClient } from '@prisma/client';

export async function seedEhrMappings(prisma: PrismaClient) {
  console.log('Seeding EHR mappings...');

  const baseQuestions = await prisma.baseQuestion.findMany();
  const baseQuestionMap = new Map(
    baseQuestions.map((q) => [q.internalCode, q.id]),
  );

  const athenaMappings = [
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_NAME'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.name',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_GENDER'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.gender',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_DOB'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.dob',
      ehrFieldType: 'DATE',
      transformationRule: 'FORMAT_ISO_DATE',
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_ADDRESS'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.address',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_PHONE'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.phone',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_EMAIL'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.email',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_EMERGENCY_CONTACT'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.emergencyContact',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_INSURANCE_PROVIDER'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.insuranceProvider',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_INSURANCE_POLICY_NUMBER'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.insurancePolicyNumber',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_PRIMARY_CARE_PHYSICIAN'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.primaryCarePhysician',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_ALLERGIES'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.allergies',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_CURRENT_MEDICATIONS'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.currentMedications',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_MEDICAL_HISTORY'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.medicalHistory',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_SOCIAL_HISTORY'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.socialHistory',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_FAMILY_HISTORY'),
      ehrProviderCode: 'ATHENA',
      ehrFieldPath: 'patient.familyHistory',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
  ];

  const allscriptsMappings = [
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_NAME'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_name',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_GENDER'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_gender',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_DOB'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_dob',
      ehrFieldType: 'DATE',
      transformationRule: 'FORMAT_ISO_DATE',
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_ADDRESS'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_address',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_PHONE'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_phone',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_EMAIL'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_email',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_EMERGENCY_CONTACT'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_emergencyContact',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_INSURANCE_PROVIDER'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_insuranceProvider',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_INSURANCE_POLICY_NUMBER'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_insurancePolicyNumber',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_PRIMARY_CARE_PHYSICIAN'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_primaryCarePhysician',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_ALLERGIES'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_allergies',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_CURRENT_MEDICATIONS'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_currentMedications',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_MEDICAL_HISTORY'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_medicalHistory',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_SOCIAL_HISTORY'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_socialHistory',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_FAMILY_HISTORY'),
      ehrProviderCode: 'ALLSCRIPTS',
      ehrFieldPath: 'patient.p_familyHistory',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/patients',
      isActive: true,
    },
  ];

  const epicMappings = [
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_NAME'),
      ehrProviderCode: 'EPIC',
      ehrFieldPath: 'patient.demographics.name',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/api/FHIR/R4/Patient',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_GENDER'),
      ehrProviderCode: 'EPIC',
      ehrFieldPath: 'patient.demographics.gender',
      ehrFieldType: 'STRING',
      transformationRule: null,
      ehrEndpoint: '/api/FHIR/R4/Patient',
      isActive: true,
    },
    {
      baseQuestionId: baseQuestionMap.get('PATIENT_DOB'),
      ehrProviderCode: 'EPIC',
      ehrFieldPath: 'patient.demographics.birthDate',
      ehrFieldType: 'DATE',
      transformationRule: 'FORMAT_ISO_DATE',
      ehrEndpoint: '/api/FHIR/R4/Patient',
      isActive: true,
    },
  ];

  const allMappings = [
    ...athenaMappings,
    ...allscriptsMappings,
    ...epicMappings,
  ];

  for (const mapping of allMappings) {
    await prisma.ehrMapping.upsert({
      where: {
        unique_question_ehr_mapping: {
          baseQuestionId: mapping.baseQuestionId as string,
          ehrProviderCode: mapping.ehrProviderCode,
        },
      },
      update: {},
      create: {
        baseQuestionId: mapping.baseQuestionId!,
        ehrProviderCode: mapping.ehrProviderCode,
        ehrFieldPath: mapping.ehrFieldPath,
        ehrFieldType: mapping.ehrFieldType,
        transformationRule: mapping.transformationRule,
        ehrEndpoint: mapping.ehrEndpoint,
        isActive: mapping.isActive,
      },
    });
  }

  console.log('EHR mappings seeded successfully!');
}
