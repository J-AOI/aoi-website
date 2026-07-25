import Container from "./Container";

export default function Section({ children, className = "", containerClassName = "" }) {
  return (
    <section className={`py-20 sm:py-24 lg:py-32 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
