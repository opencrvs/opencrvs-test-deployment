/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors located at https://github.com/opencrvs/opencrvs-core/blob/master/AUTHORS.
 */

// THE FOLLOWING HANDLEBARS CAN BE USED IN THE SVG CODE IN THE CERTIFICATE FOR THIS EVENT

export const certificateHandlebars = {
  registrationNumber: 'registrationNumber',
  qrCode: 'qrCode',
  certificateDate: 'certificateDate',
  registrar: 'registrar',
  registrationAgent: 'registrationAgent',
  registrarName: 'registrarName', // @deprecated use registrar.name instead
  role: 'role', // @deprecated use registrar.role instead
  registrarSignature: 'registrarSignature', // @deprecated use registrar.signature instead
  registrationDate: 'registrationDate',
  registrationLocation: 'registrationLocation', // @deprecated use registrar.office/state/district instead
  contactEmail: 'contactEmail',
  contactPhoneNumber: 'contactPhoneNumber',
  birthConfigurableIdentifier1: 'birthConfigurableIdentifier1',
  birthConfigurableIdentifier2: 'birthConfigurableIdentifier2',
  birthConfigurableIdentifier3: 'birthConfigurableIdentifier3',
  placeOfBirth: 'placeOfBirth',
  informantType: 'informantType',
  attendantAtBirth: 'attendantAtBirth',
  multipleBirth: 'multipleBirth',
  weightAtBirth: 'weightAtBirth',
  birthType: 'birthType',
  childFirstName: 'childFirstName',
  childFamilyName: 'childFamilyName',
  childGender: 'childGender',
  eventDate: 'eventDate',
  informantFirstName: 'informantFirstName',
  informantFamilyName: 'informantFamilyName',
  informantBirthDate: 'informantBirthDate',
  informantNationality: 'informantNationality',
  informantNID: 'informantNID',
  motherReasonNotApplying: 'motherReasonNotApplying',
  motherBirthDate: 'motherBirthDate',
  motherFirstName: 'motherFirstName',
  motherFamilyName: 'motherFamilyName',
  motherNationality: 'motherNationality',
  motherNID: 'motherNID',
  motherMaritalStatus: 'motherMaritalStatus',
  motherOccupation: 'motherOccupation',
  motherEducationalAttainment: 'motherEducationalAttainment',
  fatherBirthDate: 'fatherBirthDate',
  fatherFirstName: 'fatherFirstName',
  fatherFamilyName: 'fatherFamilyName',
  fatherNationality: 'fatherNationality',
  fatherNID: 'fatherNID',
  fatherMaritalStatus: 'fatherMaritalStatus',
  fatherOccupation: 'fatherOccupation',
  fatherEducationalAttainment: 'fatherEducationalAttainment',
  countryPlaceofbirth: 'countryPlaceofbirth',
  statePlaceofbirth: 'statePlaceofbirth', // @deprecated use statePlaceofbirthId instead
  statePlaceofbirthId: 'statePlaceofbirthId',
  districtPlaceofbirth: 'districtPlaceofbirth', // @deprecated use districtPlaceofbirthId instead
  districtPlaceofbirthId: 'districtPlaceofbirthId',
  cityPlaceofbirth: 'cityPlaceofbirth',
  addressLine3Placeofbirth: 'addressLine3Placeofbirth',
  addressLine2Placeofbirth: 'addressLine2Placeofbirth',
  addressLine1Placeofbirth: 'addressLine1Placeofbirth',
  postalCodePlaceofbirth: 'postalCodePlaceofbirth',
  internationalStatePlaceofbirth: 'internationalStatePlaceofbirth',
  internationalDistrictPlaceofbirth: 'internationalDistrictPlaceofbirth',
  internationalCityPlaceofbirth: 'internationalCityPlaceofbirth',
  internationalAddressLine1Placeofbirth:
    'internationalAddressLine1Placeofbirth',
  internationalAddressLine2Placeofbirth:
    'internationalAddressLine2Placeofbirth',
  internationalAddressLine3Placeofbirth:
    'internationalAddressLine3Placeofbirth',
  internationalPostalCodePlaceofbirth: 'internationalPostalCodePlaceofbirth',
  countryPrimaryInformant: 'countryPrimaryInformant',
  statePrimaryInformant: 'statePrimaryInformant', // @deprecated use statePrimaryInformantId instead
  statePrimaryInformantId: 'statePrimaryInformantId',
  districtPrimaryInformant: 'districtPrimaryInformant', // @deprecated use districtPrimaryInformantId instead
  districtPrimaryInformantId: 'districtPrimaryInformantId',
  cityPrimaryInformant: 'cityPrimaryInformant',
  addressLine3PrimaryInformant: 'addressLine3PrimaryInformant',
  addressLine2PrimaryInformant: 'addressLine2PrimaryInformant',
  addressLine1PrimaryInformant: 'addressLine1PrimaryInformant',
  postalCodePrimaryInformant: 'postalCodePrimaryInformant',
  internationalStatePrimaryInformant: 'internationalStatePrimaryInformant',
  internationalDistrictPrimaryInformant:
    'internationalDistrictPrimaryInformant',
  internationalCityPrimaryInformant: 'internationalCityPrimaryInformant',
  internationalAddressLine1PrimaryInformant:
    'internationalAddressLine1PrimaryInformant',
  internationalAddressLine2PrimaryInformant:
    'internationalAddressLine2PrimaryInformant',
  internationalAddressLine3PrimaryInformant:
    'internationalAddressLine3PrimaryInformant',
  internationalPostalCodePrimaryInformant:
    'internationalPostalCodePrimaryInformant',
  countryPrimaryMother: 'countryPrimaryMother',
  statePrimaryMother: 'statePrimaryMother', // @deprecated use statePrimaryMotherId instead
  statePrimaryMotherId: 'statePrimaryMotherId',
  districtPrimaryMother: 'districtPrimaryMother', // @deprecated use districtPrimaryMotherId instead
  districtPrimaryMotherId: 'districtPrimaryMotherId',
  cityPrimaryMother: 'cityPrimaryMother',
  addressLine3PrimaryMother: 'addressLine3PrimaryMother',
  addressLine2PrimaryMother: 'addressLine2PrimaryMother',
  addressLine1PrimaryMother: 'addressLine1PrimaryMother',
  postalCodePrimaryMother: 'postalCodePrimaryMother',
  internationalStatePrimaryMother: 'internationalStatePrimaryMother',
  internationalDistrictPrimaryMother: 'internationalDistrictPrimaryMother',
  internationalCityPrimaryMother: 'internationalCityPrimaryMother',
  internationalAddressLine1PrimaryMother:
    'internationalAddressLine1PrimaryMother',
  internationalAddressLine2PrimaryMother:
    'internationalAddressLine2PrimaryMother',
  internationalAddressLine3PrimaryMother:
    'internationalAddressLine3PrimaryMother',
  internationalPostalCodePrimaryMother: 'internationalPostalCodePrimaryMother',
  fatherReasonNotApplying: 'fatherReasonNotApplying',
  countryPrimaryFather: 'countryPrimaryFather',
  statePrimaryFather: 'statePrimaryFather', // @deprecated use statePrimaryFatherId instead
  statePrimaryFatherId: 'statePrimaryFatherId',
  districtPrimaryFather: 'districtPrimaryFather', // @deprecated use districtPrimaryFatherId instead
  districtPrimaryFatherId: 'districtPrimaryFatherId',
  cityPrimaryFather: 'cityPrimaryFather',
  addressLine3PrimaryFather: 'addressLine3PrimaryFather',
  addressLine2PrimaryFather: 'addressLine2PrimaryFather',
  addressLine1PrimaryFather: 'addressLine1PrimaryFather',
  postalCodePrimaryFather: 'postalCodePrimaryFather',
  internationalStatePrimaryFather: 'internationalStatePrimaryFather',
  internationalDistrictPrimaryFather: 'internationalDistrictPrimaryFather',
  internationalCityPrimaryFather: 'internationalCityPrimaryFather',
  internationalAddressLine1PrimaryFather:
    'internationalAddressLine1PrimaryFather',
  internationalAddressLine2PrimaryFather:
    'internationalAddressLine2PrimaryFather',
  internationalAddressLine3PrimaryFather:
    'internationalAddressLine3PrimaryFather',
  internationalPostalCodePrimaryFather: 'internationalPostalCodePrimaryFather'
}
