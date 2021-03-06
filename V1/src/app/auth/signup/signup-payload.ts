import { PhoneNumber } from './phone-number';

export class SignupPayload {
    firstName: string;
    lastName: string;
    role: string;
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    phoneNumbers: PhoneNumber[];
    username: string;
    password: string;
}
