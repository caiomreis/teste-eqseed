import Dropzone from "react-dropzone";
import { Heading5 } from "../../../../../../components/text/heading/style";
import testeeqseed_theme from "../../../../../../style/theme_colors";
import { PaymentProofContent } from "./style";
import { useAppDispatch } from "../../../../../../store/store";
import {
  FilesModel,
  LiquidationSliceType,
  setProofFiles,
} from "../../../../../../store/ofertas_slice";
import NoFileDroped from "./components/NoFileDroped";
import { useState } from "react";
import LeaveFile from "./components/LeaveFile";
import WithFile from "./components/WithFile";

const PaymentProof: React.FC<{ state: LiquidationSliceType }> = ({ state }) => {
  const dispatch = useAppDispatch();
  const [isDragIn, setisDragIn] = useState(false);
  return (
    <PaymentProofContent>
      <Heading5 color={testeeqseed_theme.theme.green.strong} fontWeight={700}>
        APÓS EFETUAR O PAGAMENTO
      </Heading5>
      <Dropzone
        accept={{
          "image/jpeg": [".jpeg", ".png"],
          "application/pdf": [".pdf"],
        }}
        maxSize={25000000}
        onDragEnter={() => {
          setisDragIn(true);
        }}
        onDragLeave={() => {
          setisDragIn(false);
        }}
        onDrop={(acceptedFiles) => {
          setisDragIn(false);
          acceptedFiles.forEach((el) => {
            dispatch(setProofFiles(el as unknown as FilesModel));
          });
        }}
        onDropRejected={(e) => {
          if (e[0].errors[0].code === "file-invalid-type") {
            alert(
              `Arquivo invalido, os arquivos permitidos são: .PDF, .JPEG OU .PNG `
            );
          }
          if (e[0].errors[0].code === "file-too-large") {
            alert(`Tamanho maior que o permitido `);
          }
        }}
      >
        {({ getRootProps, getInputProps }) => (
          <>
            {state.files.length === 0 && (
              <div className="div_input" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragIn ? <LeaveFile /> : <NoFileDroped />}
              </div>
            )}
            {state.files.length !== 0 && (
              <div className="div_input">
                <input {...getInputProps()} />
                <WithFile files={state.files} getInput={getRootProps} />
              </div>
            )}
          </>
        )}
      </Dropzone>
    </PaymentProofContent>
  );
};

export default PaymentProof;
