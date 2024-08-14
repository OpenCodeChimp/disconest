import { ClientOptions as IDiscordClientOptions, Snowflake } from 'discord.js';

export interface IDisconestModuleOptions extends IDiscordClientOptions {
    token: string;
    prefix?: string | (() => Promise<string>);
    development?: Snowflake[] | false;
    skipRegistration?: boolean;
}
