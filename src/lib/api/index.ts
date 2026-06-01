const emailService = async (data: any) => {
  const emailServiceURL = "https://node-mail-f0ob.onrender.com/contact";

  try {
    const response = await fetch(emailServiceURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

export default emailService;