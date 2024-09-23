import LineSkeleton from "../../../../../../components/skeleton/line_skeleton";
import {
  Body3,
  Body4,
  Body2,
} from "../../../../../../components/text/body/style";
import {
  Heading3,
  Heading4,
} from "../../../../../../components/text/heading/style";
import { LiquidationSliceType } from "../../../../../../store/ofertas_slice";
import testeeqseed_theme from "../../../../../../style/theme_colors";
import { toMoney } from "../../../../../../utils/numberUtils";
import { LiquidationContentHeader, LiquidationHeaderValues } from "./style";

const LiquidationHeader: React.FC<{ state: LiquidationSliceType }> = ({
  state,
}) => {
  return (
    <>
      <LiquidationContentHeader>
        <div className="title_field">
          <div>
            <Heading3
              color={testeeqseed_theme.theme.green.strong}
              fontWeight={700}
            >
              Você está quase lá!
            </Heading3>
            <Heading4
              fontWeight={300}
              color={testeeqseed_theme.theme.grey.light}
              lineheight="20px"
            >
              {state.loading ? (
                <LineSkeleton width={"250px"} height={20} />
              ) : (
                state.liquidationSelected?.nome_oferta
              )}
            </Heading4>
          </div>

          <Body3 fontWeight={400} color={testeeqseed_theme.theme.grey.medium}>
            {state.loading ? (
              <LineSkeleton width={"250px"} height={20} />
            ) : (
              <>
                Para finalizar seu investimento, faça sua tranfêrencia para a
                conta bancária da
                <b> {state.liquidationSelected?.nome_oferta}</b>.
              </>
            )}
          </Body3>
        </div>
        <div className="content_values">
          <LiquidationHeaderValues>
            <div className="values">
              <Body4>PAGAMENTO VÁLIDO ATÉ:</Body4>
              <Body2 fontWeight={700}>
                {state.loading ? (
                  <LineSkeleton width={"100%"} height={20} />
                ) : (
                  state.liquidationSelected?.validade
                )}
              </Body2>
            </div>
            <div className="date">
              <Body4 color={testeeqseed_theme.theme.white}>VALOR:</Body4>
              <Body2 fontWeight={700} color={testeeqseed_theme.theme.white}>
                {state.loading ? (
                  <LineSkeleton width={"100%"} height={20} />
                ) : (
                  toMoney(state.liquidationSelected?.valor_a_ser_liquidado)
                )}
              </Body2>
            </div>
          </LiquidationHeaderValues>
        </div>
      </LiquidationContentHeader>
    </>
  );
};

export default LiquidationHeader;
