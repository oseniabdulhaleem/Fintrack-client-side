// import BalanceTransactions from './BalanceTransactions';
import * as React from 'react';
import { Icon } from '@iconify/react';
import { Theme } from '@radix-ui/themes';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import Transactions from 'src/sections/manage_balance/transactions';

// import AppWidgetSummary from '../sections/overview/app-widget-summary';
// import Card from '@mui/material/Card';
import Input from '@mui/material/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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
                    <Box sx={style}>
                      <Typography id="add_balance_popup" variant="h6" component="h2">
                        Add Balance
                      </Typography>
                      <Typography id="new_balance_add" sx={{ mt: 2 }}>
                        Amount :
                        <p>
                          <Input type="number" fullWidth />
                        </p>
                        Balance :
                        <p>
                          <Input type="number" fullWidth />
                        </p>
                        <p className="mt-10 flex flex-row justify-end">
                          <button className="p-4" onClick={handleClose} type="button">
                            Cancel
                          </button>
                          <button className="bg-blue-500 p-3 rounded-lg" type="button">
                            Update
                          </button>
                        </p>
                      </Typography>
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
                <p className="basis-2/3 pl-1 text-5xl">
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
      <h1 className="text-3xl p-4 mt-2 mb-1">Recent Transactions</h1>
      <Theme accentColor="gold" grayColor="gray">
        <Transactions />
        {/* <ThemePanel /> */}
      </Theme>
    </Container>
  );
}
