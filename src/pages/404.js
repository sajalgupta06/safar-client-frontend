import { Button, Result } from 'antd';
import Link from 'next/link';

const Index = () => (
    <section className='section'>
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Link href="/">
    <Button type="primary">Back Home</Button>
    </Link>
}
  />
  </section>
);
export default Index;