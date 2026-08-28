import { validateTitle } from "../src/validator";

describe("Validação do título do chamado", () => {
  test("deve rejeitar título vazio", () => {
    expect(validateTitle("")).toBe(false);
  });

  test("deve rejeitar título contendo apenas espaços", () => {
    expect(validateTitle("     ")).toBe(false);
  });

  test("deve rejeitar título com menos de 5 caracteres", () => {
    expect(validateTitle("abcd")).toBe(false);
  });

  test("deve aceitar título com exatamente 5 caracteres", () => {
    expect(validateTitle("abcde")).toBe(true);
  });

  test("deve aceitar título com exatamente 100 caracteres", () => {
    const title = "a".repeat(100);

    expect(validateTitle(title)).toBe(true);
  });

  test("deve rejeitar título com mais de 100 caracteres", () => {
    const title = "a".repeat(101);

    expect(validateTitle(title)).toBe(false);
  });
});
