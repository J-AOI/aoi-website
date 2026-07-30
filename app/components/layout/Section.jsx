import Container from "./Container";

const padding = {
  default: "py-20 sm:py-24 lg:py-32",
  compact: "py-16 sm:py-20 lg:py-24",
  tight: "py-14 sm:py-16 lg:py-20",
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  spacing = "default",
  ...props
}) {
  return (
    <section className={`${padding[spacing]} ${className}`} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
