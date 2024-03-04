<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class ImageExtension extends AbstractExtension
{
    private string $imagesDir;
    private Filesystem $filesystem;

    public function __construct(
        #[Autowire('%uploaded_images_dir%')]
        string $imagesDir,
        Filesystem $filesystem
    )
    {
        $this->imagesDir = $imagesDir;
        $this->filesystem = $filesystem;
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('image_exists', [$this, 'imageExists']),
        ];
    }

    public function imageExists(string $imageName): bool
    {
        return $this->filesystem->exists($this->imagesDir . '/' . $imageName);
    }
}
