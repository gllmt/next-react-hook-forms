import FormWithRhfZodServer from "@/components/FormWithRhfZodServer";
import { NavHome } from "@/components/NavHome";
import MainContainer from "@/components/MainContainer";

export default function PageFormWithRhfZodServer() {
  return (
    <MainContainer>
      <NavHome />
      <h1 className="text-4xl font-bold text-balance text-center">
        Form With React Hook Form and Zod Server
      </h1>
      <FormWithRhfZodServer />
    </MainContainer>
  );
}
