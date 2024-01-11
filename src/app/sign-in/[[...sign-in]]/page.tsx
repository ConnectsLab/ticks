import Navbar from "@/components/Navbar/Navbar";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="md:w-[35%] mx-auto p-4">
        <div>
          <div>
            <SignIn
              appearance={{
                elements: {
                  rootBox: "w-full font-body",
                  card: "w-full space-y-6  bg-transparent text-violet-50",
                  header: "hidden",
                  formFieldLabel:
                    "font-body capitalize text-lg font-light text-violet-50",
                  formButtonPrimary:
                    "bg-[#4C37A0] p-3 text-xl font-body hover:bg-[#4C37A0] font-light capitalize",
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

export default LoginPage;
