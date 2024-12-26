 

const Page = () => {
  const handleForm = async (formData: FormData) => {
    "use server";

    console.log(formData);
    const username = formData.get("username")  ;
 
    console.log("Hello", username);
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />
        <button>send</button>
      </form>
    </div>
  );
};

export default Page;