export default defineEventHandler(async (event) => {
  const formData = await readBody(event);
  // the email would be sent from here
  console.log({ formData });
});
