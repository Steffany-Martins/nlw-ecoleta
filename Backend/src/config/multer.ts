import multer from "multer";
import path from "path";
import crypto from "crypto";

export default multer({
  storage: multer.diskStorage({
    //multers disk storage settings
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (request, file, callback) => {
      const hash = crypto.randomBytes(6).toString("hex");
      const fileName = `${hash}-${file.originalname}`;
      callback(null, fileName);
    },
  }),
  // Como esses arquivos serão filtrados, quais formatos são aceitos/esperados?
  fileFilter: (request, file, callback) => {
    // Procurando o formato do arquivo em um array com formatos aceitos
    // A função vai testar se algum dos formatos aceitos do ARRAY é igual ao formato do arquivo.
    const isAccepted = ["image/png", "image/jpg", "image/jpeg"].find(
      (formatoAceito) => formatoAceito == file.mimetype
    );

    // O formato do arquivo bateu com algum aceito?
    if (isAccepted) {
      // Executamos o callback com o segundo argumento true (validação aceita)
      return callback(null, true);
    }

    // Se o arquivo não bateu com nenhum aceito, executamos o callback com o segundo valor false (validação falhouo)
    return callback(null, false);
  },
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
});
