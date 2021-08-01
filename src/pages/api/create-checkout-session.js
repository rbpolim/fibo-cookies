export default async (request, response) => {
  const { email, items } = request.body;

  const transformedItems = items.map((item) => ({
    //commit here
  }));
};
