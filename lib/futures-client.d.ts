import { APIResponse, KlineInterval, FuturesProductType, FuturesAccountBillRequest, FuturesBusinessBillRequest, NewFuturesOrder, NewBatchFuturesOrder, FuturesPagination, NewFuturesPlanOrder, ModifyFuturesPlanOrder, ModifyFuturesPlanOrderTPSL, NewFuturesPlanPositionTPSL, ModifyFuturesPlanStopOrder, CancelFuturesPlanTPSL, HistoricPlanOrderTPSLRequest, NewFuturesPlanStopOrder, FuturesAccount, FuturesSymbolRule, FuturesMarginMode, FuturesPosition, NewFuturesPlanTrailingStopOrder } from './types';
import BaseRestClient from './util/BaseRestClient';
/**
 * REST API client
 */
export declare class FuturesClient extends BaseRestClient {
    getClientType(): "futures";
    /**
     *
     * Market
     *
     */
    /** Get Symbols : Get basic configuration information of all trading pairs (including rules) */
    getSymbols(productType: FuturesProductType): Promise<APIResponse<FuturesSymbolRule[]>>;
    /** Get Depth */
    getDepth(symbol: string, limit?: string): Promise<APIResponse<any>>;
    /** Get Single Symbol Ticker */
    getTicker(symbol: string): Promise<APIResponse<any>>;
    /** Get All Tickers */
    getAllTickers(productType: FuturesProductType): Promise<APIResponse<any>>;
    /** Get Market Trades */
    getMarketTrades(symbol: string, limit?: string): Promise<APIResponse<any>>;
    /** Get Candle Data */
    getCandles(symbol: string, granularity: KlineInterval, startTime: string, endTime: string): Promise<any>;
    /** Get symbol index price */
    getIndexPrice(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol next funding time */
    getNextFundingTime(symbol: string): Promise<APIResponse<any>>;
    /** Get Withdraw List */
    getHistoricFundingRate(symbol: string, pageSize?: string, pageNo?: string, nextPage?: boolean): Promise<APIResponse<any>>;
    /** Get symbol current funding time */
    getCurrentFundingRate(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol open interest */
    getOpenInterest(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol mark price */
    getMarkPrice(symbol: string): Promise<APIResponse<any>>;
    /** Get symbol min/max leverage rules */
    getLeverageMinMax(symbol: string): Promise<APIResponse<any>>;
    /**
     *
     * Account Endpoints
     *
     */
    /** Get Single Account */
    getAccount(symbol: string, marginCoin: string): Promise<APIResponse<FuturesAccount>>;
    /** Get Account List */
    getAccounts(productType: FuturesProductType): Promise<APIResponse<any>>;
    /**
     * This interface is only used to calculate the maximum number of positions that can be opened when the user does not hold a position by default.
     * The result does not represent the actual number of positions opened.
     */
    getOpenCount(symbol: string, marginCoin: string, openPrice: number, openAmount: number, leverage?: number): Promise<APIResponse<any>>;
    /** Change Leverage */
    setLeverage(symbol: string, marginCoin: string, leverage: string, holdSide?: string): Promise<APIResponse<any>>;
    /** Change Margin */
    setMargin(symbol: string, marginCoin: string, amount: string, holdSide?: string): Promise<APIResponse<any>>;
    /** Change Margin Mode */
    setMarginMode(symbol: string, marginCoin: string, marginMode: FuturesMarginMode): Promise<APIResponse<any>>;
    /** Get Symbol Position */
    getPosition(symbol: string, marginCoin?: string): Promise<APIResponse<FuturesPosition[]>>;
    /** Get All Position */
    getPositions(productType: FuturesProductType, marginCoin?: string): Promise<APIResponse<FuturesPosition[]>>;
    /** Get Account Bill */
    getAccountBill(params: FuturesAccountBillRequest): Promise<APIResponse<any>>;
    /** Get Business Account Bill */
    getBusinessBill(params: FuturesBusinessBillRequest): Promise<APIResponse<any>>;
    /**
     *
     * Trade Endpoints
     *
     */
    /** Place Order */
    submitOrder(params: NewFuturesOrder): Promise<APIResponse<any>>;
    /** Batch Order */
    batchSubmitOrder(symbol: string, marginCoin: string, orders: NewBatchFuturesOrder[]): Promise<APIResponse<any>>;
    /** Cancel Order */
    cancelOrder(symbol: string, marginCoin: string, orderId: string): Promise<APIResponse<any>>;
    /** Batch Cancel Order */
    batchCancelOrder(symbol: string, marginCoin: string, orderIds: string[]): Promise<APIResponse<any>>;
    /** Cancel All Order */
    cancelAllOrders(productType: FuturesProductType, marginCoin: string): Promise<APIResponse<any>>;
    /** Get Open Order */
    getOpenSymbolOrders(symbol: string): Promise<APIResponse<any>>;
    /** Get All Open Order */
    getOpenOrders(productType: FuturesProductType, marginCoin: string): Promise<APIResponse<any>>;
    /** Get History Orders */
    getOrderHistory(symbol: string, startTime: string, endTime: string, pageSize: string, lastEndId?: string, isPre?: boolean): Promise<APIResponse<any>>;
    /** Get ProductType History Orders */
    getProductTypeOrderHistory(productType: FuturesProductType, startTime: string, endTime: string, pageSize: string, lastEndId?: string, isPre?: boolean): Promise<APIResponse<any>>;
    /** Get order details */
    getOrder(symbol: string, orderId?: string, clientOid?: string): Promise<APIResponse<any>>;
    /** Get transaction details / history (fills)  */
    getOrderFills(symbol: string, orderId?: string, pagination?: FuturesPagination): Promise<APIResponse<any>>;
    /** Get ProductType Order fill detail */
    getProductTypeOrderFills(productType: FuturesProductType, pagination?: FuturesPagination): Promise<APIResponse<any>>;
    /** Place Plan order */
    submitPlanOrder(params: NewFuturesPlanOrder): Promise<APIResponse<any>>;
    /** Modify Plan Order */
    modifyPlanOrder(params: ModifyFuturesPlanOrder): Promise<APIResponse<any>>;
    /** Modify Plan Order TPSL */
    modifyPlanOrderTPSL(params: ModifyFuturesPlanOrderTPSL): Promise<APIResponse<any>>;
    /** Place Stop order */
    submitStopOrder(params: NewFuturesPlanStopOrder): Promise<APIResponse<any>>;
    /** Place Trailing Stop order */
    submitTrailingStopOrder(params: NewFuturesPlanTrailingStopOrder): Promise<APIResponse<any>>;
    /** Place Position TPSL */
    submitPositionTPSL(params: NewFuturesPlanPositionTPSL): Promise<APIResponse<any>>;
    /** Modify Stop Order */
    modifyStopOrder(params: ModifyFuturesPlanStopOrder): Promise<APIResponse<any>>;
    /** Cancel Plan Order TPSL */
    cancelPlanOrderTPSL(params: CancelFuturesPlanTPSL): Promise<APIResponse<any>>;
    /** Get Plan Order (TPSL) List */
    getPlanOrderTPSLs(symbol: string, isPlan?: string, productType?: FuturesProductType): Promise<APIResponse<any>>;
    /** Get History Plan Orders (TPSL) */
    getHistoricPlanOrdersTPSL(params: HistoricPlanOrderTPSLRequest): Promise<APIResponse<any>>;
    /**
     *
     * Trade Endpoints
     *
     */
    /** Get Trader Open order */
    getCopyTraderOpenOrder(symbol: string, productType: FuturesProductType, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Followers Open Order */
    getCopyFollowersOpenOrder(symbol: string, productType: FuturesProductType, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Trader Close Position */
    closeCopyTraderPosition(symbol: string, trackingNo: string): Promise<APIResponse<any>>;
    /** Trader Modify TPSL */
    modifyCopyTraderTPSL(symbol: string, trackingNo: string, changes?: {
        stopProfitPrice?: number;
        stopLossPrice?: number;
    }): Promise<APIResponse<any>>;
    /** Get Traders History Orders */
    getCopyTraderOrderHistory(startTime: string, endTime: string, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Trader Profit Summary */
    getCopyTraderProfitSummary(): Promise<APIResponse<any>>;
    /** Get Trader History Profit Summary (according to settlement currency) */
    getCopyTraderHistoricProfitSummary(): Promise<APIResponse<any>>;
    /** Get Trader History Profit Summary (according to settlement currency and date) */
    getCopyTraderHistoricProfitSummaryByDate(marginCoin: string, dateMs: string, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Trader Histroy Profit Detail */
    getCopyTraderHistoricProfitDetail(marginCoin: string, dateMs: string, pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get Trader Profits Details */
    getCopyTraderProfitDetails(pageSize: number, pageNo: number): Promise<APIResponse<any>>;
    /** Get CopyTrade Symbols */
    getCopyTraderSymbols(): Promise<APIResponse<any>>;
    /** Trader Change CopyTrade symbol */
    setCopyTraderSymbols(symbol: string, operation: 'add' | 'delete'): Promise<APIResponse<any>>;
}
