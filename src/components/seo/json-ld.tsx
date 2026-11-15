/**
 * Renders schema.org structured data. JSON-LD is a data block, not executed
 * script, so it isn't affected by the site's CSP. "<" is escaped so content
 * can never close the script tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
