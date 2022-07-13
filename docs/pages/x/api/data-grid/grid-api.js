import MarkdownDocs from '@mui/monorepo/docs/src/modules/components/MarkdownDocs';
import { demos, docs, demoComponents } from './grid-api.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs demos={demos} docs={docs} demoComponents={demoComponents} />;
}
