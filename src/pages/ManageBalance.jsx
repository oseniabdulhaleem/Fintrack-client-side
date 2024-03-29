// import BalanceTransactions from './BalanceTransactions';
import * as React from 'react';
import { Icon } from '@iconify/react';
import { Theme } from '@radix-ui/themes';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Transactions from 'src/sections/manage_balance/transactions';

// import AppWidgetSummary from '../sections/overview/app-widget-summary';
// import Card from '@mui/material/Card';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 3,
  p: 4,
  borderRadius: '3%',
};

export default function ManageBalance() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // basis - 11 / 12;
  return (
    <Container>
      <h1 className="text-3xl p-4 mb-1">Manage Balance</h1>
      <Grid container spacing={1}>
        <Grid item md={7} sm={6} xs={12}>
          <Card
            sx={{
              borderRadius: 2,
              borderColor: 'rgb(229, 231, 235)',
              px: 4,
              py: 3,
              borderWidth: 1,
              margin: 1,
            }}
          >
            <div className="flex flex-row justify-end">
              <div className="mr-5 text-lg border-2 rounded-lg cursor-pointer  hover:text-white ">
                <div>
                  <Button onClick={handleOpen}>+ Add</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="add_balance_popup"
                    aria-describedby="new_balance_add"
                  >
                    <Box>
                      <Grid container spacing={5} sx={style}>
                        <Typography variant="h6" sx={{ marginBottom: '12px' }}>
                          Add Balance
                        </Typography>
                        <Grid xs={12}>
                          <TextField
                            id="outlined-number"
                            label="New Balance"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid xs={12}>
                          <TextField
                            id="outlined-number"
                            label="Income"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                        <Grid xs={12} container sx={{ justifyContent: 'flex-end', gap: '5px' }}>
                          <Button
                            onClick={handleClose}
                            color="secondary"
                            variant="filled"
                            sx={{
                              borderWidth: '1px ',
                              borderRadius: '10%',
                              padding: '5%',
                              justifySelf: 'end',
                            }}
                          >
                            Cancel
                          </Button>

                          {/* <button type="button">Update</button> */}
                          <Button
                            sx={{
                              borderWidth: '1px ',
                              borderRadius: '10%',
                              padding: 0,
                              justifySelf: 'end',
                            }}
                          >
                            Update
                          </Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
            <div className="basis-1/2  m-0 mx-5  ">
              <div className="flex flex-row my-4">
                <p className="basis-1/3 text-lg pt-4">
                  <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                    Current Balance:{' '}
                  </Typography>
                </p>
                <p className="basis-2/3 pl-1 text-4xl">
                  <Icon icon="tabler:currency-naira" className="inline" />
                  9000
                </p>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item md={4} sm={6} xs={12} sx={{ justifySelf: 'stretch' }}>
          <Card
            sx={{
              borderRadius: 2,
              // borderColor: 'rgb(229, 231, 235)',
              px: 2,
              py: 3,
              borderWidth: 1,
              margin: 1,
              // height: '70%',
            }}
          >
            <p className="text-lg p-2">
              <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
                Monthly Income:
              </Typography>
            </p>

            <div>
              <div className="flex justify-center items-center ">
                <p className=" text-3xl  rounded-lg p-5">
                  <Icon icon="tabler:currency-naira" className="inline" />
                  5000
                </p>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
      <h1 className="text-2xl p-4 mt-2 mb-1">Recent Transactions</h1>
      <Theme accentColor="gold" grayColor="gray">
        <Transactions />
        {/* <ThemePanel /> */}
      </Theme>
    </Container>
  );
}
