import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
  flex-wrap: wrap;
  margin-top: ${theme.space[0]};
  margin-bottom: ${theme.space[0]};
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
`;

const body = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const caption = (theme) => `
  font-size: ${theme.fontSizes.caption};
  font-weight: ${theme.fontWeights.bold};
`;

const error = (theme) => `
  color: ${theme.colors.text.error};
`;

const hint = (theme) => `
  font-size: ${theme.fontSizes.body};
`;

const label = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.medium};
`;

const label1 = (theme) => `
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes.title};
  font-weight: ${theme.fontWeights.medium};
`;

const heading = (theme) => `
  font-family: ${theme.fonts.body};
  font-size: ${theme.fontSizes.h3};
  font-weight: ${theme.fontWeights.bold};
`;

const variants = {
  body,
  caption,
  error,
  hint,
  label,
  label1,
  heading,
};

export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)};
  ${({ variant, theme }) => variants[variant](theme)};
`;

Text.defaultProps = {
  variant: "body",
};
