
export const metadata = {
  title: "eds",
  description: "eds",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
