import { Button, FormControl, Grid2, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getAllCoin } from "../api/api";

export default function InputForm() {
  const queryClient = useQueryClient();
  const getTopCoin = useMutation({
    mutationFn: async () => await getAllCoin(),
    onSuccess: (data) => {
      queryClient.setQueryData(["all-coin"], data);
    },
  });

  const handleScanTopCoin = () => {
    getTopCoin.mutate();
  };
  return (
    <>
      <FormControl className="flex flex-col gap-4" sx={{ width: "100%" }}>
        <Grid2 size={12}>
          <TextField
            id="USD"
            variant="outlined"
            label="USD"
            type="number"
            fullWidth
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            id="USDT/VND"
            variant="outlined"
            label="USDT/VND rate"
            type="number"
            fullWidth
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            id="KRW/VND"
            variant="outlined"
            label="KRW/VND rate"
            type="number"
            fullWidth
          />
        </Grid2>
        <Grid2 container size={12} sx={{ gap: 2, justifyContent: "center" }}>
          <Grid2 size={{ sm: 12, xs: 12, md: 5, lg: 5 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => handleScanTopCoin()}
            >
              Quét coin
            </Button>
          </Grid2>
          {/* <Grid2 size={{ sm: 12, xs: 12, md: 5, lg: 5 }}>
            <Button variant="contained" color="primary" fullWidth>
              Quét toàn bộ
            </Button>
          </Grid2> */}
        </Grid2>
      </FormControl>
    </>
  );
}
