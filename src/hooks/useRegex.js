export default function useRegex() {
  const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

  return {
    phone: (phone) => phoneRegExp.test(phone),
  };
}
