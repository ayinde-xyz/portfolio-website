const Footer = () => {
  return (
    <footer className="w-full border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto py-4 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Ayinde AbdurRahman. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
