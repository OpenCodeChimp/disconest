import { ConfigurableModuleBuilder } from '@nestjs/common';
import { IDisconestModuleOptions } from './disconest-options.interface';

export const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ConfigurableModuleClass,
    MODULE_OPTIONS_TOKEN: DISCONEST_MODULE_OPTIONS,
    OPTIONS_TYPE,
    ASYNC_OPTIONS_TYPE,
} = new ConfigurableModuleBuilder<IDisconestModuleOptions>().setClassMethodName('forRoot').setFactoryMethodName('createDisconestOptions').build();
