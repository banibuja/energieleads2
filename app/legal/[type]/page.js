// app/legal/[type]/page.js
import Impressum from '../../components/Impressum'
import AGB from '../../components/AGB';
import Datenschutz from '../../components/Datenschutz';

export default function LegalPage({ params }) {
  const { type } = params;

  return (
    <div>
      {type === 'impressum' && <Impressum />}
      {type === 'agb' && <AGB />}
      {type === 'datenschutz' && <Datenschutz />}
      {/* Handle invalid or missing type */}
      {!['impressum', 'agb', 'datenschutz'].includes(type) && (
        <div>Please select a valid option.</div>
      )}
    </div>
  );
}

// Optionally, you can statically generate these pages:
export async function generateStaticParams() {
  return ['impressum', 'agb', 'datenschutz'].map(type => ({ type }));
}
