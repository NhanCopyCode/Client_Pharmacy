import { createApiService } from "./api/apiService";

const voucherService = { ...createApiService("vouchers") };

export default voucherService;
