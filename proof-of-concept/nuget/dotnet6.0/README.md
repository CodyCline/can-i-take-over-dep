# Evil .NET 6.0

This is an evil .NET package. It makes use of a `.targets` file which is imported by `.csproj` file. Whenever you run dotnet restore (which automatically runs when you install a package) it will invoke the inline `<Task>` code specified in `.targets` file.


# Mitigations


1. Configure a `packageSourceMapping` to discern which dependencies are fetched from private or public sources. This is done by adding a `nuget.config` at the root of your project.

```xml
<!-- Define a global packages folder for your repository. -->
<!-- This is where installed packages will be stored locally. -->
<config>
  <add key="globalPackagesFolder" value="globalPackagesFolder" />
</config>

<!-- Define my package sources, nuget.org and contoso.com. -->
<!-- `clear` ensures no additional sources are inherited from another config file. -->
<packageSources>
  <clear />
  <!-- `key` can be any identifier for your source. -->
  <add key="nuget.org" value="https://api.nuget.org/v3/index.json" />
  <add key="contoso.com" value="https://contoso.com/packages/" />
</packageSources>

<!-- Define mappings by adding package ID patterns beneath the target source. -->
<!-- Contoso.* packages will be restored from contoso.com, everything else from nuget.org. -->
<packageSourceMapping>
  <!-- key value for <packageSource> should match key values from <packageSources> element -->
  <packageSource key="nuget.org">
    <package pattern="*" />
  </packageSource>
  <packageSource key="contoso.com">
    <package pattern="Contoso.*" />
  </packageSource>
</packageSourceMapping>
```

See [more here](https://learn.microsoft.com/en-us/nuget/consume-packages/package-source-mapping)
2. [Reserve a prefix](https://learn.microsoft.com/en-us/nuget/nuget-org/id-prefix-reservation) on nuget to prevent name squatting.
3. Claim the name of any internal package that is not visible in the public nuget registry.