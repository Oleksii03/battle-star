interface PasswordCriteria {
  minLength: number;
  minLowercase: number;
  minUppercase: number;
  minNumbers: number;
  minSymbols: number;
}
export const passwordCriteria: PasswordCriteria = {
  minLength: 8,
  minLowercase: 1,
  minUppercase: 1,
  minNumbers: 1,
  minSymbols: 0,
};
