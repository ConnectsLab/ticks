import Navbar from "@/components/Navbar/Navbar";
import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      {/* container */}
      <main className="md:w-[80%] mx-auto h-screen">
        {/* grid container */}
        <div className="grid grid-cols-1 md:grid-cols-4 h-full place-items-center">
          <div className="hidden  col-span-2 md:flex  p-3 justify-center  items-center">
            <h1 className="font-head text-6xl font-bold capitalize text-white">
              Experience the best, <br /> event organization.
            </h1>
          </div>
          <div className="w-full col-span-2 h-full">
            <SignUp
              appearance={{
                elements: {
                  rootBox: "w-full font-body h-full ",
                  card: "w-full space-y-6  bg-transparent text-violet-50 shadow-none",
                  header: "hidden",
                  formFieldLabel:
                    "font-body capitalize  font-light text-violet-50",
                  formButtonPrimary:
                    "bg-[#4C37A0] p-4 text-xl font-head hover:bg-[#4C37A0] font-bold capitalize",
                  formFieldInput: "bg-[#7C7EA6] p-4 font-body text-violet-50",
                  selectButton:
                    "font-body p-4 text-violet-500 border border-violet-50 bg-violet-100 hover:bg-violet-100",
                  footerActionText: "text-violet-50",
                  footerActionLink: "text-[#7C7EA6] underline",
                  formFieldInputShowPasswordIcon: "text-white",
                },
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default RegisterPage;
