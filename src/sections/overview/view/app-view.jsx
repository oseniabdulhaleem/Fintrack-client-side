// import { Icon } from '@iconify/react';
import { faker } from '@faker-js/faker';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppTrafficBySite from '../app-traffic-by-site';
import AppCurrentSubject from '../app-current-subject';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function AppView() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid
          xs={12}
          sm={6}
          md={4}
          onClick={() => navigate('/manage_balance')}
          sx={{
            cursor: 'pointer',
            transition: 'height 0.5s ease', // Apply transition to the height property
            '&:hover': {
              padding: '0.4em', // Increased padding on hover
            },
          }}
        >
          <AppWidgetSummary
            title="Balance"
            total={714000}
            color="success"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M42.451 29.914v5.893a3.946 3.946 0 0 1-3.946 3.947H8.446A3.946 3.946 0 0 1 4.5 35.807V12.193a3.946 3.946 0 0 1 3.947-3.947h30.058a3.946 3.946 0 0 1 3.946 3.947v6.098"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M42.294 29.925H31.925a5.822 5.822 0 0 1-5.822-5.822h0a5.822 5.822 0 0 1 5.822-5.823h10.37c.665 0 1.205.54 1.205 1.206v9.234c0 .665-.54 1.205-1.206 1.205"
                />
                <circle cx="32.458" cy="24.171" r="2.705" fill="none" stroke="currentColor" />
              </svg>
            }
            nav_icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1"
                />
              </svg>
            }
          />
        </Grid>

        <Grid
          xs={12}
          sm={6}
          md={4}
          onClick={() => navigate('/manage_balance')}
          sx={{
            cursor: 'pointer',
            transition: 'height 0.5s ease', // Apply transition to the height property
            '&:hover': {
              padding: '0.4em', // Increased padding on hover
            },
          }}
        >
          <AppWidgetSummary
            title="Budget"
            total={1352831}
            color="info"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path
                  fill="none"
                  stroke="currentColor"
                  d="M33.41 19.83a17.61 17.61 0 0 1 1.29-9.13c.18-.36.52-.78.18-1.17s-.81-.12-1.21 0a7.78 7.78 0 0 0-4.79 4c-.27.47-.46.94-1.19.84a33.57 33.57 0 0 0-7.43-.14a13.38 13.38 0 0 0-5.32 1.46A12.88 12.88 0 0 0 9.27 22a2 2 0 0 1-.12-.41c-.28-1.3-1-2-2.13-1.83H7A1.91 1.91 0 0 0 5.36 22A6.86 6.86 0 0 0 8 27.79a1.58 1.58 0 0 1 .64.92a12 12 0 0 0 3.88 6.35a2.76 2.76 0 0 1 1 2.39c-.27 2.72.81 4.1 3.77 4.5a5.88 5.88 0 0 0 .69.12c2 .41 1.78.4 2.15-1.42c.25-1.22.74-1.58 2-1.39a17.62 17.62 0 0 0 3.08.15c2.47 0 2.48 0 3.15 2.31c.12.42.21.88.8.77a15.36 15.36 0 0 0 4-.93a2.55 2.55 0 0 0 1.73-2.31c-.21-2.13.48-3 1.76-4.59c.18-.21.56-.58.77-.88a4.42 4.42 0 0 1 3.52-2.06c1.21-.06 1.75-.43 1.75-1.82v-4.2a1.66 1.66 0 0 0-1.46-1.82a4.24 4.24 0 0 1-3.09-2.54a12.23 12.23 0 0 0-4.72-5m1.63 10.86a1.79 1.79 0 0 1-1.68-1.89v0a1.76 1.76 0 0 1 1.85-1.66h0a1.79 1.79 0 1 1-.2 3.57Z"
                />
                <path fill="none" stroke="currentColor" d="M16.94 14.82A4.7 4.7 0 1 1 23 14" />
              </svg>
            }
            nav_icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1"
                />
              </svg>
            }
          />
        </Grid>

        <Grid
          xs={12}
          sm={6}
          md={4}
          onClick={() => navigate('/manage_balance')}
          sx={{
            cursor: 'pointer',
            transition: 'height 0.5s ease', // Apply transition to the height property
            '&:hover': {
              padding: '0.4em', // Increased padding on hover
            },
          }}
        >
          <AppWidgetSummary
            title="Expense"
            total={1723315}
            color="warning"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                <path d="M6.5 17V9h1v8zm5 0V9h1v8zm-7.962 3v-1h16.924v1zM16.5 17V9h1v8zM3.538 7v-.846L12 2.115l8.462 4.039V7zm2.643-1h11.638zm0 0h11.638L12 3.25z" />
              </svg>
            }
            nav_icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 6c0 .56.45 1 1 1h5.59L4.7 17.89a.996.996 0 1 0 1.41 1.41L17 8.41V14c0 .55.45 1 1 1s1-.45 1-1V6c0-.55-.45-1-1-1h-8c-.55 0-1 .45-1 1"
                />
              </svg>
            }
          />
        </Grid>

        {/* <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid> */}

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
