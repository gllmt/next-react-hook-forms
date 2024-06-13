import FormWithoutReactHookForm from "@/components/FormWithoutReactHookForm";
import { NavHome } from "@/components/NavHome";
import MainContainer from "@/components/MainContainer";

export default function PageFormWithoutReactHookForm() {
  return (
    <MainContainer>
      <NavHome />
      <h1 className="text-4xl font-bold text-balance text-center">
        Form Without React Hook Form
      </h1>
      <FormWithoutReactHookForm />
    </MainContainer>
  );
}
