import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import { demos, docs, demoComponents } from 'docsx/data/data-grid/sorting/sorting.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs demos={demos} docs={docs} demoComponents={demoComponents} />;
}
