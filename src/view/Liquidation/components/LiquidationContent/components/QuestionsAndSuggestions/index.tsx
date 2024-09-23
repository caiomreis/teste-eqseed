import { Caution1 } from "../../../../../../components/text/body/style";
import {
  Heading4,
  Heading5,
} from "../../../../../../components/text/heading/style";
import testeeqseed_theme from "../../../../../../style/theme_colors";
import { QuestionsAndSuggestionsContent } from "./style";

const QuestionsAndSuggestions: React.FC = () => {
  return (
    <QuestionsAndSuggestionsContent>
      <Heading5 color={testeeqseed_theme.theme.green.strong} fontWeight={700}>
        DÚVIDAS E SUGESTÕES
      </Heading5>
      <div className="content">
        <div className="green_card">
          <Caution1 fontWeight={600}>
            <a
              target="_blank"
              href="https://wa.me/5531982652636"
              rel="noreferrer"
            >
              CHAT
            </a>
          </Caution1>
          <Heading4 color={testeeqseed_theme.theme.white} fontWeight={600}>
            Whatsapp
          </Heading4>
        </div>
        <div className="grey_card">
          <Caution1 fontWeight={600}>
            <a href="mailto: investidores@eqseed.com">E_MAIL </a>
          </Caution1>
          <Heading4
            color={testeeqseed_theme.theme.green.strong}
            fontWeight={600}
          >
            investidores@eqseed.com
          </Heading4>
        </div>
      </div>
    </QuestionsAndSuggestionsContent>
  );
};

export default QuestionsAndSuggestions;
