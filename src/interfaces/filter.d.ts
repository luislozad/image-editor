export type Filter = 'none' | 'desert' | 'peach' | 'clash' | 'plum' | 'breezy' | 'deepblue' | 'frog' | 'sunset' | '1920a.d.' | 'greyed' | 'dusty' | 'litho' | 'sepia' | 'weathered' | 'hardstuff' | 'polaroid' | 'sunny70s' | 'oldtimer' | 'inferno' | 'snappy' | 'chestnut' | 'softy' | 'pebble' | 'moss' | 'lemon' | 'greengap' | 'colla' | 'solanus' | 'kalmen' | 'joran' | 'levante' | 'zephyr' | 'colden' | 'lowfirex' | 'sunrise' | 'flatblack' | 'pumpkin' | 'ancient' | 'candy' | 'classic' | 'colorful' | 'creamy' | 'fixie' | 'food' | 'fridge' | 'glam' | 'gobblin' | 'hicon' | 'hightcarb' | 'k1' | 'k6' | 'keen' | 'lomo' | 'lomo100' | 'lucid' | 'mellow' | 'neat' | 'pale' | 'pitched' | 'polasx' | 'pro400' | 'quozi' | 'settled' | 'seventies' | 'soft' | 'steel' | 'summer' | 'tender' | 'twilight';

export interface FilterConfig {
	mode?: string;
	color?: string;
	alpha?: number;
}

export interface SubFilter {
	name: string;
	config: FilterConfig;
}