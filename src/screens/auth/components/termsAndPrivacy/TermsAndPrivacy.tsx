import { FC } from "react";
import {
  ContainerTermsAndPrivacy,
  StyledTermsAndPrivacy,
  TermsServiceAndPrivacyPolicy,
} from "./TermsAndPrivacy.styles";

export const TermsAndPrivacy: FC = () => {
  return (
    <ContainerTermsAndPrivacy>
      <StyledTermsAndPrivacy>
        Clicando em cotinuar, você concorda com nossos{" "}
        <TermsServiceAndPrivacyPolicy>
          Termos de serviço
        </TermsServiceAndPrivacyPolicy>{" "}
        e nossa{" "}
        <TermsServiceAndPrivacyPolicy>
          Política de privacidade
        </TermsServiceAndPrivacyPolicy>
        .
      </StyledTermsAndPrivacy>
    </ContainerTermsAndPrivacy>
  );
};
