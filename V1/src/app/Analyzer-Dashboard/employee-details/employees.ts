import { Phone } from "./phone"

export class Employees {
	constructor(
		userID: number,
		firstName: string,
		lastName: string,
		role: string,
		addressLine1: string,
		addressLine2: string,
		addressLine3: string,
		phoneNumber: Phone[],
	) { }
}