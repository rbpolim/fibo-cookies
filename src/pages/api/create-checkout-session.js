export default async (request, response) => {
  const { email, items } = request.body;

  console.log(email);
  console.log(items);
};
