import { Button } from '@payloadcms/ui';
import { IS_DEV } from '@/lib/utils';

function BeforeDashboard() {
  return (
    <div className="before-dashboard">
      <h1>Welcome to panel admin of Anime Hub</h1>
      {IS_DEV && (
        <Button buttonStyle="secondary" type="submit">
          Load sample data
        </Button>
      )}
    </div>
  );
}

export default BeforeDashboard;
