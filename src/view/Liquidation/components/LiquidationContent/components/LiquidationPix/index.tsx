import { QRCodeSVG } from "qrcode.react";
import TesteIcon from "../../../../../../components/testeIcons";
import { Body4 } from "../../../../../../components/text/body/style";
import {
  LiquidationSliceType,
  PaymentMethod,
  setPaymentMethod,
} from "../../../../../../store/ofertas_slice";
import { useAppDispatch } from "../../../../../../store/store";
import testeeqseed_theme from "../../../../../../style/theme_colors";
import { LiquidationPixContent, PaymentInfosContent } from "./style";

const LiquidationPix: React.FC<{ state: LiquidationSliceType }> = ({
  state,
}) => {
  const dispatch = useAppDispatch();
  return (
    <LiquidationPixContent
      $isselected={state.paymentMethod === PaymentMethod.pix}
      onClick={() => dispatch(setPaymentMethod(PaymentMethod.pix))}
    >
      <div className="header">
        <Body4
          color={
            state.paymentMethod === PaymentMethod.pix
              ? testeeqseed_theme.theme.white
              : testeeqseed_theme.theme.black
          }
          fontWeight={600}
        >
          Chave PIX
        </Body4>
      </div>
      <div className="content">
        <div className="qr_code">
          <QRCodeSVG
            value={state.liquidationSelected?.imagem_qrcode!}
            width={120}
            height={120}
          />

          <button
            className="copy_button"
            onClick={() => {
              navigator.clipboard.writeText(
                state.liquidationSelected?.chave_pix!
              );
              alert(
                `Chave PIX: ${state.liquidationSelected?.chave_pix!}, copiada!`
              );
            }}
          >
            <Body4 color={testeeqseed_theme.theme.black} fontWeight={600}>
              COPIAR CHAVE PIX
            </Body4>
            <TesteIcon
              icon={`content_copy`}
              size={20}
              color={testeeqseed_theme.theme.black}
            />
          </button>
        </div>
        <div className="paymantInfos">
          <PaymentInfos
            title={"CHAVE PIX (CNPJ)"}
            info={state.liquidationSelected?.chave_pix!}
          />
          <PaymentInfos
            title={"FAVORECIDO"}
            info={state.liquidationSelected?.nome_favorecido!}
          />
          <PaymentInfos
            title={"BANCO"}
            info={state.liquidationSelected?.banco!}
          />
          <PaymentInfos
            title={"AGÊNCIA"}
            info={state.liquidationSelected?.agencia!}
          />
          <PaymentInfos
            title={"CONTA CORRENTE"}
            info={state.liquidationSelected?.numero_conta_corrente!}
          />
          <PaymentInfos
            title={"CNPJ"}
            info={state.liquidationSelected?.cnpj!}
          />
        </div>
      </div>
    </LiquidationPixContent>
  );
};
const PaymentInfos: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <PaymentInfosContent>
      <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={600}>
        {title}
      </Body4>
      <Body4 color={testeeqseed_theme.theme.grey.medium} fontWeight={700}>
        {info}
      </Body4>
    </PaymentInfosContent>
  );
};

export default LiquidationPix;
