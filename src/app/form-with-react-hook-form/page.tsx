import FormWithReactHookForm from "@/components/FormWithReactHookForm";
import { NavHome } from "@/components/NavHome";
import MainContainer from "@/components/MainContainer";

export default function PageFormWithReactHookForm() {
  return (
    <MainContainer>
      <NavHome />
      <h1 className="text-4xl font-bold text-balance text-center">
        Form With React Hook Form
      </h1>
      <FormWithReactHookForm />
    </MainContainer>
  );
}
