import Navbar from "@/components/Navbar/Navbar";
import { SignUp } from "@clerk/nextjs";

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <main className="md:w-[80%] mx-auto p-4">
        <div className="grid md:grid-cols-2 grid-cols-1 ">
          <div className="hidden md:flex md:items-center md:justify-center">
            <h2 className="font-head text-5xl font-bold text-violet-50">
              Expand Your Reach and Sell More Tickets with Us!
            </h2>
          </div>
          <div>
            <SignUp
              appearance={{
                elements: {
                  rootBox: "w-full font-body h-screen",
                  card: "w-full space-y-6  bg-transparent text-violet-50",
                  header: "hidden",
                  formFieldLabel:
                    "font-body capitalize  font-light text-violet-50",
                  formButtonPrimary:
                    "bg-[#4C37A0] p-4 text-xl font-body hover:bg-[#4C37A0] font-light capitalize",
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
