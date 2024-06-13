import FormWithRhfZod from "@/components/FormWithRhfZod";
import { NavHome } from "@/components/NavHome";
import MainContainer from "@/components/MainContainer";

export default function PageFormWithRhfZod() {
  return (
    <MainContainer>
      <NavHome />
      <h1 className="text-4xl font-bold text-balance text-center">
        Form With React Hook Form and Zod
      </h1>
      <FormWithRhfZod />
    </MainContainer>
  );
}
