import { createApiService } from "./api/apiService";
import axiosInstance from "./api/axiosInstance";

const voucherService = { ...createApiService("vouchers"),
    getVoucherApproved : () => {
        return axiosInstance.get('/vouchers/getListApproved')
    }
 };

export default voucherService;
