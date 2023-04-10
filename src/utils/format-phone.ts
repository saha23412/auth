export default function formatPhoneNumber(inputValuePhone: string) {
  if (!inputValuePhone) return inputValuePhone;
  const phoneNumber = inputValuePhone.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 2)
    return `${
      phoneNumber.slice(0, 1) !== '7' ? `${7}` : `+${phoneNumber.slice(0, 1)}`
    }`;
  if (phoneNumberLength < 5)
    return `${
      phoneNumber.slice(0, 1) !== '7' ? `+${7}` : `+${phoneNumber.slice(0, 1)}`
    } ${phoneNumber.slice(1, 4)}`;
  if (phoneNumberLength < 8) {
    return `${
      phoneNumber.slice(0, 1) !== '7' ? `+${7}` : `+${phoneNumber.slice(0, 1)}`
    } ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)}`;
  }
  if (phoneNumberLength < 10) {
    return `${
      phoneNumber.slice(0, 1) !== '7' ? `+${7}` : `+${phoneNumber.slice(0, 1)}`
    } ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(
      7,
      9
    )}`;
  }
  return `${
    phoneNumber.slice(0, 1) !== '7' ? `+${7}` : `+${phoneNumber.slice(0, 1)}`
  } ${phoneNumber.slice(1, 4)} ${phoneNumber.slice(4, 7)} ${phoneNumber.slice(
    7,
    9
  )} ${phoneNumber.slice(9, 11)}`;
}
