import { Button, FormControl, Grid2, TextField } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { setRate } from "../api/api";

export default function InputForm() {
  const [formData, setFormData] = useState<any>();
  const queryClient = useQueryClient();

  const ratesMutation = useMutation({
    mutationKey: ["rates"],
    mutationFn: (inputData: any) => setRate(inputData),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["rates"],
      })
    },
  });

  const handleScanCoin = () => {
    ratesMutation.mutate(formData);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: Number(value) });
  };
  return (
    <>
      <FormControl className="flex flex-col gap-4" sx={{ width: "100%" }}>
        {/* tạm thời chưa dùng đến */}
        {/* <Grid2 size={12}>
          <TextField
            name="USD"
            id="USD"
            variant="outlined"
            label="USD"
            type="number"
            fullWidth
            onChange={(e) => handleChange(e)}
          />
        </Grid2> */}
        <Grid2 size={12}>
          <TextField
            id="USDT/VND"
            name="usdt_vnd_rate"
            variant="outlined"
            label="USDT/VND rate"
            type="number"
            value={formData?.usdt_nvd_rate || ""}
            fullWidth
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 size={12}>
          <TextField
            id="KRW/VND"
            name="krw_vnd_rate"
            variant="outlined"
            label="KRW/VND rate"
            type="number"
            value={formData?.krw_vnd_rate || ""}
            fullWidth
            onChange={(e) => handleChange(e)}
          />
        </Grid2>
        <Grid2 container size={12} sx={{ gap: 2, justifyContent: "center" }}>
          <Grid2 size={{ sm: 12, xs: 12, md: 5, lg: 5 }}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                handleScanCoin();
              }}
            >
              Quét coin
            </Button>
          </Grid2>
        </Grid2>
      </FormControl>
    </>
  );
}
