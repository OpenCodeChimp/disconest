import { Global, Inject, Module, OnApplicationBootstrap, OnApplicationShutdown } from '@nestjs/common';
import { Client } from 'discord.js';
import { CommandsModule } from './commands/commands.module';
import { IDisconestModuleOptions } from './disconest-options.interface';
import { ConfigurableModuleClass, DISCONEST_MODULE_OPTIONS } from './disconest.module-definition';

@Global()
@Module({
    imports: [CommandsModule],
    providers: [],
    exports: [],
})
export class DisconestModule extends ConfigurableModuleClass implements OnApplicationBootstrap, OnApplicationShutdown {
    public constructor(
        private readonly client: Client,
        @Inject(DISCONEST_MODULE_OPTIONS)
        private readonly options: IDisconestModuleOptions,
    ) {
        super();
    }

    public onApplicationBootstrap(): Promise<string> {
        return this.client.login(this.options.token);
    }

    public onApplicationShutdown(): Promise<void> {
        return this.client.destroy();
    }
}
