import Layout from '../../components/layout';
import { getAllJobsIds, getJobsData } from '../../lib/jobs';
import Head from 'next/head';
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Job({ jobData }) {
    return (
        <Layout>
            <Head>
              <title>{jobData.title}</title>
            </Head>
            <article>
              <h1 className={utilStyles.headingXl}>{jobData.title}</h1>
              <div className={utilStyles.lightText}>
                <Date dateString={jobData.date} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: jobData.contentHtml }} />
            </article>
        </Layout>
    );
  }

export async function getStaticProps({ params }) {
  const jobData = await getJobData(params.id);
  return {
    props: {
      jobData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllJobIds();
  return {
    paths,
    fallback: false,
  };
}

