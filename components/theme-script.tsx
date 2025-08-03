export function ThemeScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `
          try {
            const theme = localStorage.getItem('theme') || 'dark';
            document.documentElement.classList.toggle('dark', theme === 'dark');
          } catch (e) {
            document.documentElement.classList.add('dark');
          }
        `,
            }}
        />
    )
}
